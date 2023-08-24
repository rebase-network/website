import { useLocation } from "react-router-dom";
import SteinStore from "stein-js-client";

import { steinhqUrl, learnblockchainApikey, learnblockchainUrlPosts } from '../../constants';

export const WechatShow: React.FC = () => {
  const { state } = useLocation();
  const items = state;

  const newitems = items.map((item: any) => {
    delete item['editor'];
    return item
  });

  const pushToSteinHQ = (connUrl: string, storeData: any) => {
    const store = new SteinStore(connUrl);

    store.append("Summary", storeData).then((res: any) => {
      console.log(res);
    });

  };

  const pushToLearnblockchain = (apikey: any, connUrl: any, dx: any) => {

    const _title = "Rebase 极客日报 " + dx[0].episode;

    const _content = `
  ### ${dx[0].title}

  ${dx[0].url}

  **${dx[0].author}**: ${dx[0].introduce}

  ### ${dx[1].title}

  ${dx[1].url}

  **${dx[1].author}**: ${dx[1].introduce}

  ### ${dx[2].title}

  ${dx[2].url}

  **${dx[2].author}**: ${dx[2].introduce}
  `;

    let _headers = {
      "content-type": "application/x-www-form-urlencoded",
      "x-api-key": apikey,
    };

    let params = new URLSearchParams();

    params.append("title", _title);
    params.append("content", _content);
    params.append("type", "1"); // 文章类型，1: 原创，2: 翻译，3: 转载，可不填
    params.append("is_public", "1"); // 文章是否公开，1: 公开，2: 仅自己可见，默认为公开
    params.append("category_id", "8"); // 填写文章分类 ID，5: 以太坊，7: Solidity, 8: 入门，13: 安全，23: 零知识，27: DeFi，可不填

    return fetch(connUrl, {
      method: "POST",
      headers: _headers,
      body: params,
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("learnblockchain result =>", json);
      });
  }


  pushToSteinHQ(steinhqUrl, newitems);

  pushToLearnblockchain(learnblockchainApikey, learnblockchainUrlPosts, newitems);

  return (
    <>
      <div
        className="rich_media_content"
        style={{ visibility: "visible", margin: "5px 8px" }}
      >
        <h2
          style={{
            marginBottom: 14,
            fontSize: 22,
            lineHeight: "1.4",
            fontFamily:
              '-apple-system-font, system-ui, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", Arial, sans-serif',
            letterSpacing: "0.544px",
            textAlign: "start",
            whiteSpace: "normal",
            backgroundColor: "rgb(255, 255, 255)"
          }}
        >
          <span style={{ margin: "5px 8px", fontSize: 15 }}>
            微信不支持外部链接，可以点击文章底部的
            <strong
              data-darkmode-bgcolor="rgb(36, 36, 36)"
              data-darkmode-color="rgb(150, 162, 172)"
              data-style='max-width: 100%; background-color: rgb(255, 255, 255); color: rgb(61, 70, 77); font-family: suxingme, "Open Sans", Arial, "Hiragino Sans GB", "Microsoft YaHei", STHeiti, "WenQuanYi Micro Hei", SimSun, sans-serif; letter-spacing: 0.544px; text-align: start; box-sizing: border-box !important; overflow-wrap: break-word !important;'
              className="js_darkmode__1"
              style={{
                fontSize: 15,
                maxWidth: "100%",
                letterSpacing: "0.544px",
                color: "rgb(61, 70, 77)",
                fontFamily:
                  'suxingme, "Open Sans", Arial, "Hiragino Sans GB", "Microsoft YaHei", STHeiti, "WenQuanYi Micro Hei", SimSun, sans-serif',
                visibility: "visible",
                boxSizing: "border-box !important",
                overflowWrap: "break-word !important"
              }}
            >
              阅读原文
            </strong>

            <span
              data-darkmode-bgcolor="rgb(36, 36, 36)"
              data-darkmode-color="rgb(150, 162, 172)"
              data-style='max-width: 100%; background-color: rgb(255, 255, 255); color: rgb(61, 70, 77); font-family: suxingme, "Open Sans", Arial, "Hiragino Sans GB", "Microsoft YaHei", STHeiti, "WenQuanYi Micro Hei", SimSun, sans-serif; letter-spacing: 0.544px; text-align: start;'
              className="js_darkmode__2"
              style={{
                maxWidth: "100%",
                letterSpacing: "0.544px",
                color: "rgb(61, 70, 77)",
                fontFamily:
                  'suxingme, "Open Sans", Arial, "Hiragino Sans GB", "Microsoft YaHei", STHeiti, "WenQuanYi Micro Hei", SimSun, sans-serif',
                visibility: "visible",
                boxSizing: "border-box !important",
                overflowWrap: "break-word !important"
              }}
            >
              ，方便阅读文中的链接，也可通过 https://daily.rebase.network/
              浏览每期日报内容。
            </span>
          </span>
        </h2>

        {newitems.map((item: any) => (

          <blockquote
            style={{
              margin: "2em 8px",
              WebkitTapHighlightColor: "transparent",
              fontSize: 14,
              whiteSpace: "normal",
              textAlign: "left",
              color: "rgba(0, 0, 0, 0.5)",
              lineHeight: "1.75",
              fontFamily:
                'Optima-Regular, Optima, PingFangSC-light, PingFangTC-light, "PingFang SC", Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
              borderLeft: "none",
              padding: "1em",
              borderRadius: 8,
              background: "rgb(247, 247, 247)"
            }}
          >
            <p
              style={{
                WebkitTapHighlightColor: "transparent",
                color: "rgb(80, 80, 80)",
                lineHeight: "1.75",
                fontSize: "1em",
                letterSpacing: "0.1em"
              }}
            >
              <strong>
                <span style={{ color: "rgb(0, 0, 0)" }}>
                  {item.title}
                </span>
              </strong>
            </p>
            <p
              style={{
                WebkitTapHighlightColor: "transparent",
                color: "rgb(80, 80, 80)",
                lineHeight: "1.75",
                fontSize: "1em",
                letterSpacing: "0.1em"
              }}
            >
              <strong>
                <span style={{ color: "rgb(0, 0, 0)" }}>
                  <br />
                </span>
              </strong>
            </p>
            <p
              style={{
                WebkitTapHighlightColor: "transparent",
                color: "rgb(80, 80, 80)",
                lineHeight: "1.75",
                fontSize: "1em",
                letterSpacing: "0.1em"
              }}
            >
              {item.url}
              <br />
            </p>
            <p
              style={{
                WebkitTapHighlightColor: "transparent",
                color: "rgb(80, 80, 80)",
                lineHeight: "1.75",
                fontSize: "1em",
                letterSpacing: "0.1em"
              }}
            >
              <em style={{ color: "rgba(0, 0, 0, 0.5)" }}>
                <br />
              </em>
            </p>
            <p
              style={{
                WebkitTapHighlightColor: "transparent",
                color: "rgb(80, 80, 80)",
                lineHeight: "1.75",
                fontSize: "1em",
                letterSpacing: "0.1em"
              }}
            >
              <span
                style={{
                  color: "rgb(0, 0, 0)",
                  fontFamily:
                    'Optima-Regular, Optima, PingFangSC-light, PingFangTC-light, "PingFang SC", Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
                  letterSpacing: "1.4px",
                  textAlign: "left",
                  backgroundColor: "rgb(247, 247, 247)"
                }}
              >
                <strong>
                  {item.author}
                </strong>
                :
              </span>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                {item.introduce}
              </span>
              <span
                style={{
                  color: "rgb(179, 144, 144)",
                  fontSize: "1em",
                  letterSpacing: "0.1em"
                }}
              />
            </p>
          </blockquote>

        ))}

        <p
          style={{
            maxWidth: "100%",
            minHeight: "1em",
            boxSizing: "border-box !important",
            overflowWrap: "break-word !important"
          }}
        >
          <br
            style={{
              maxWidth: "100%",
              boxSizing: "border-box !important",
              overflowWrap: "break-word !important"
            }}
          />
        </p>
        <hr
          style={{
            maxWidth: "100%",
            borderStyle: "solid",
            borderRightWidth: 0,
            borderBottomWidth: 0,
            borderLeftWidth: 0,
            borderColor: "rgba(0, 0, 0, 0.098)",
            transformOrigin: "0px 0px 0px",
            transform: "scale(1, 0.5)",
            boxSizing: "border-box !important",
            overflowWrap: "break-word !important"
          }}
        />
        <p
          style={{
            maxWidth: "100%",
            minHeight: "1em",
            color: "rgb(53, 53, 53)",
            fontSize: 14,
            textAlign: "start",
            letterSpacing: "0.544px",
            boxSizing: "border-box !important",
            overflowWrap: "break-word !important"
          }}
        >
          <br
            style={{
              maxWidth: "100%",
              boxSizing: "border-box !important",
              overflowWrap: "break-word !important"
            }}
          />
        </p>
        <p
          style={{
            maxWidth: "100%",
            minHeight: "1em",
            letterSpacing: "0.544px",
            color: "rgb(53, 53, 53)",
            fontSize: 14,
            textAlign: "start",
            boxSizing: "border-box !important",
            overflowWrap: "break-word !important"
          }}
        >
          <span
            style={{
              maxWidth: "100%",
              fontSize: 15,
              boxSizing: "border-box !important",
              overflowWrap: "break-word !important"
            }}
          >
            <strong
              style={{
                maxWidth: "100%",
                boxSizing: "border-box !important",
                overflowWrap: "break-word !important"
              }}
            >
              Web3 极客日报是为 Web3
              时代的极客们准备的日常读物，由一群极客协作完成，每天更新，每期包含三个推荐内容，都来自极客们各自关注的领域。每晚由
              Rebase 志愿者整理发出。若有意参与内容贡献，请添加微信 ljyxxzj
              并注明日报贡献。
            </strong>
          </span>
        </p>
        <strong
          style={{
            maxWidth: "100%",
            boxSizing: "border-box !important",
            overflowWrap: "break-word !important"
          }}
        >
          <p
            style={{
              maxWidth: "100%",
              minHeight: "1em",
              letterSpacing: "0.544px",
              color: "rgb(53, 53, 53)",
              fontSize: 14,
              textAlign: "start",
              boxSizing: "border-box !important",
              overflowWrap: "break-word !important"
            }}
          >
            <br
              style={{
                maxWidth: "100%",
                boxSizing: "border-box !important",
                overflowWrap: "break-word !important"
              }}
            />
          </p>
          <p
            style={{
              maxWidth: "100%",
              minHeight: "1em",
              letterSpacing: "0.544px",
              color: "rgb(53, 53, 53)",
              fontSize: 14,
              textAlign: "start",
              boxSizing: "border-box !important",
              overflowWrap: "break-word !important"
            }}
          >
            <br
              style={{
                maxWidth: "100%",
                boxSizing: "border-box !important",
                overflowWrap: "break-word !important"
              }}
            />
          </p>
          <hr
            style={{
              maxWidth: "100%",
              borderStyle: "solid",
              borderRightWidth: 0,
              borderBottomWidth: 0,
              borderLeftWidth: 0,
              borderColor: "rgba(0, 0, 0, 0.098)",
              transformOrigin: "0px 0px 0px",
              transform: "scale(1, 0.5)",
              boxSizing: "border-box !important",
              overflowWrap: "break-word !important"
            }}
          />
          <p
            style={{
              maxWidth: "100%",
              minHeight: "1em",
              textAlign: "center",
              boxSizing: "border-box !important",
              overflowWrap: "break-word !important"
            }}
          >
            <br
              style={{
                maxWidth: "100%",
                boxSizing: "border-box !important",
                overflowWrap: "break-word !important"
              }}
            />
          </p>
          <p
            style={{
              maxWidth: "100%",
              minHeight: "1em",
              textAlign: "center",
              boxSizing: "border-box !important",
              overflowWrap: "break-word !important"
            }}
          >
            <span
              style={{
                maxWidth: "100%",
                fontSize: 15,
                boxSizing: "border-box !important",
                overflowWrap: "break-word !important"
              }}
            >
              <strong
                style={{
                  maxWidth: "100%",
                  boxSizing: "border-box !important",
                  overflowWrap: "break-word !important"
                }}
              >
                网站：
              </strong>
              <strong
                style={{
                  maxWidth: "100%",
                  boxSizing: "border-box !important",
                  overflowWrap: "break-word !important"
                }}
              >
                https://rebase.network
              </strong>
            </span>
          </p>
          <p
            style={{
              maxWidth: "100%",
              minHeight: "1em",
              textAlign: "center",
              boxSizing: "border-box !important",
              overflowWrap: "break-word !important"
            }}
          >
            <span
              style={{
                maxWidth: "100%",
                fontSize: 15,
                boxSizing: "border-box !important",
                overflowWrap: "break-word !important"
              }}
            >
              <strong
                style={{
                  maxWidth: "100%",
                  boxSizing: "border-box !important",
                  overflowWrap: "break-word !important"
                }}
              >
                公众号：
              </strong>
              <strong
                style={{
                  maxWidth: "100%",
                  boxSizing: "border-box !important",
                  overflowWrap: "break-word !important"
                }}
              >
                rebase_network
              </strong>
            </span>
          </p>
          <p
            style={{
              maxWidth: "100%",
              minHeight: "1em",
              boxSizing: "border-box !important",
              overflowWrap: "break-word !important"
            }}
          >
            <br
              style={{
                maxWidth: "100%",
                boxSizing: "border-box !important",
                overflowWrap: "break-word !important"
              }}
            />
          </p>
          <p
            style={{
              maxWidth: "100%",
              minHeight: "1em",
              color: "rgb(53, 53, 53)",
              fontSize: 14,
              textAlign: "center",
              letterSpacing: "0.544px",
              boxSizing: "border-box !important",
              overflowWrap: "break-word !important"
            }}
          >
            <img
              className="rich_pages img_loading"
              data-ratio={1}
              data-s="300,640"
              data-type="png"
              data-w={372}
              data-src="https://mmbiz.qpic.cn/mmbiz_png/dQFmOEibdOIKVOj71RpnXzn8Tr4FaCggj0LDicic24267jickINQpwKjNSWo92oMn7M5phnyIuV5FIcbKzicMje0ZHw/640?wx_fmt=png"
              style={{
                boxSizing: "border-box !important",
                overflowWrap: "break-word !important",
                visibility: "visible !important",
                width: "223px !important",
                height: "223px !important"
              }}
              _width="223px"
              src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg=="
              crossOrigin="anonymous"
            />
          </p>
        </strong>
      </div >
      <strong
        style={{
          maxWidth: "100%",
          boxSizing: "border-box !important",
          overflowWrap: "break-word !important"
        }}
      ></strong>
    </>
  )
};
