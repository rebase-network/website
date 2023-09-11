export type Env = {
  VIKA_TOKEN: string;
  VIKA_DATASHEET_ID: string;
  VIKA_VIEW_ID: string;
}

async function pushToVika(vikaurl: string, vikatoken: string, _record: any): void {
  const record = _record.entry;

  const data = {
    fields: {
      "episode": record.episode,
      "title": record.title,
      "author": record.author,
      "url": record.url,
      "time": record.time,
      "introduce": record.introduce,
    }
  }

  const resp = await fetch(vikaurl, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${vikatoken}`,
    },
    method: 'POST',
    body: JSON.stringify({
      'fieldKey': 'name',
      'records': [data],
    })

  })

  const result = await resp.text();
  console.log(`pushToVika result: ${result}`)

}

export default {
  async fetch(request: Request, env: Env, _ctx: ExecutionContext): Promise < Response > {

    const url = new URL(request.url);

    if (url.pathname == "/strapi") {

      const jsonObj = await request.json();

      if (jsonObj.event == "entry.create" && jsonObj.model == "geekdaily") {

        console.log(">>> pushToVika");

        const vikatoken = env.VIKA_TOKEN;
        const datasheet_id = env.VIKA_DATASHEET_ID;
        const view_id = env.VIKA_VIEW_ID;

        const vikaurl = `https://api.vika.cn/fusion/v1/datasheets/${datasheet_id}/records?viewId=${view_id}&fieldKey=name`;

        await pushToVika(vikaurl, vikatoken, jsonObj);

        return new Response(`strapi webhook success`);
      }


      return new Response(`strapi`);
    }

    return new Response(`Hello World`);

  },
};
