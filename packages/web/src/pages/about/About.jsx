import React from "react";
import "./about.css"

const About = () => {
  return (
    <>
      <div>
        <section className="pt-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <h2 className="display-4 text-darkblue fx-fade-up">
                  <span className="text-info">
                    Rebase
                  </span> 是由一群中国 Web3 开发者创立的非营利性开发者社区，从 2019 年开始开始运行。
                </h2>

                <hr className="border-gray-300 my-5 fx-fade-up animation-delay-3" />

                <p className="lead text-muted fx-fade-up animation-delay-3">
                  超过 1000 名开发人员和 9000 名加密货币爱好者加入了 Rebase 社区。开发者们一起学习和开发 dApp，组织热门区块链項目的分享活动，并将分享视频发布在 bilibili.com 和 youtube.com 上。
                  目前，Rebase 有几个专注于不同领域的小组：Web3 极客日报，Rebase 大学，Rebase 黑客马拉松，Who-is-Hiring，Web3Camp 和 Rebase D. Ventures。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-light pt-6">
          <div className="container">
            <div className="fx-fade-up animation-delay-1">
              <p className="w-lg-80 lead text-secondary mt-4 mb-5">
                <h2>Web3 极客日报</h2>
                极客们的日常读物。每天发布一篇 Web3 相关的技术文章，每篇文章包括三个推荐。推荐内容来自于 Web3 极客日报智囊团成员，由社区志愿者搜集内容并整理发出。
                往期内容： <a href="https://rebase.network/geekdaily">https://rebase.network/geekdaily</a>
              </p>

              <p className="w-lg-80 lead text-secondary mt-4 mb-5">
                <h2>Web3Camp</h2>
                网站：
                <a href="https://web3camp.us/" target="_blank">
                  https://web3camp.us/
                </a>
              </p>

              <p className="w-lg-80 lead text-secondary mt-4 mb-5">
                <h2>Who is Hiring</h2>
                为方便团队招募开发者，Rebase 在 github 上建立了一个自由发布工作需求的 repo。招聘会通过 issue 的形式发送到媒体渠道，Rebase 会根据招聘内容整理为公众号文章并发出。
                链接：
                <a href="https://github.com/rebase-network/who-is-hiring/issues" target="_blank">
                  https://github.com/rebase-network/who-is-hiring/issues
                </a>
              </p>

              <p className="w-lg-80 lead text-secondary mt-4 mb-5">
                <h2>Rebase D. Ventures</h2>
                Rebase D. Ventures 是发源于 Rebase 社区的风险投资基金，用来源于社区的资金来实现帮助和成就区块链技术团队、项目的愿景。
                网站：
                <a href="https://rebased.ventures/" target="_blank">
                  https://rebased.ventures/
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default About
