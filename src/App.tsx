import { GithubFillSvg, LinkSvg, MailLineSvg, WhuLogoSvg } from "./svg";
import { box } from "./box";

export default function App() {
    const { name, email } = box;
    return (
        <main className="m-x-auto h-full max-w-968px flex flex-col gap-2 p-2">
            <main>
                <h1 className="text-h1">{name}</h1>
                <address className="w-full flex flex-row gap-4">
                    <a
                        href="https://github.com/aldlss"
                        className="flex flex-row items-center text-link"
                        target="_blank">
                        <GithubFillSvg className="w-8" />
                        <span className="text-p">Github</span>
                    </a>
                    <a
                        href="https://blog.suwako.cn"
                        className="flex flex-row items-center text-link"
                        target="_blank">
                        <LinkSvg className="w-8" />
                        <span className="text-p">Blog</span>
                    </a>
                    <a
                        href={`mailto:${email}`}
                        className="m-l-auto flex flex-row items-center text-link"
                        target="_blank">
                        <MailLineSvg className="w-8" />
                        <span className="text-p">{`${email.replace(
                            "@",
                            "[at]"
                        )}`}</span>
                    </a>
                </address>
            </main>
            <section>
                <h2 className="text-h2">自我介绍</h2>
                <UnorderedList
                    list={[
                        "熟悉 HTML, CSS, TypeScript，能熟练使用 React, Next.js 进行开发，了解其他前端框架和技术。",
                        "能使用 C++, Go, Python, C#, Kotlin 编写项目，开发过网页端、服务端、安卓端的项目。",
                        "掌握 Git 的使用，了解 Linux 常用命令。",
                        "拥有优秀的搜索能力和自我学习能力和基本的计算机科学知识与科学素养，对于新技术的学习热情高。",
                    ]}
                />
            </section>
            <section>
                <h2 className="text-h2">教育经历</h2>
                <div className="flex justify-between">
                    <h3 className="flex items-center gap-2 text-h3 font-normal">
                        <WhuLogoSvg className="w-8" />
                        <span>本科·武汉大学</span>
                    </h3>
                    <span>2021.09 ~ 至今</span>
                </div>
                <UnorderedList
                    list={[
                        "主修专业：计算机科学与技术。GPA: 3.735/4.0。",
                        "科目成绩：离散数学 93/100、数据结构 93/100、计算机网络 93/100、高级语言程序设计 92/100、计算机组成与设计 90/100。",
                        "在校荣誉：乙等奖学金、三好学生、国家励志奖学金、校级社会活动积极分子等。",
                    ]}
                />
            </section>
            <section>
                <h2 className="text-h2">项目经历</h2>
                <ul className="flex flex-col gap-2">
                    {[
                        [
                            "东方原曲认知测试无尽版",
                            "2023.09 ~ 至今",
                            <div className="flex gap-2">
                                <Link href="https://thmquiz.aldlss.work/">
                                    网页地址
                                </Link>
                                <Link href="https://github.com/aldlss/touhou-music-quiz">
                                    GitHub
                                </Link>
                            </div>,
                            <p>
                                为个人所做的听音识曲小游戏。使用 Next.js
                                框架开发，通过 SSR
                                加快首屏渲染，并实现了响应式布局，可根据屏幕长宽进行自适应放缩。界面使用
                                UnoCSS 和 HeadlessUI
                                库实现，并实现了暗色主题。音乐获取与使用采用了消费者生产者模型，实现音乐的预获取，减少用户等待时间，并使用
                                Web Worker 和 Web Audio API
                                按需对曲子进行处理和播放。优化方面，使用了 CDN
                                加快下载速度，并优化了 React 和浏览器渲染。
                            </p>,
                        ],
                        [
                            "武汉 THO 7 · 楚韵九歌 宣传页面",
                            "2023.08 ~ 2023.09",
                            <div className="flex gap-2">
                                <Link href="https://whtho7.aldlss.work">
                                    网页地址
                                </Link>
                                <Link href="https://github.com/Ayaloia/WHTHO7">
                                    GitHub
                                </Link>
                            </div>,
                            <p>
                                为 第七届武汉THONLY·楚韵九歌
                                主题展会所作宣传页面。使用 Next.js
                                框架开发，并采用响应式布局，页面整体风格参考了
                                GitHub 首页。通过 CSS 和 Framer Motion
                                库实现了各类动画和过渡效果，增强页面吸引力和交互性。CSS
                                部分使用了原子化插件 UnoCSS
                                进行编写，方便编写维护并能减少一定样式文件体积。不过由于项目异动导致部分素材缺失，未能发布。
                            </p>,
                        ],
                        [
                            "MiniTikTok 社交模块后端开发",
                            "2023.01 ~ 2023.02",
                            <Link href="https://github.com/aldlss/MiniTikTok-Social-Module">
                                GitHub
                            </Link>,
                            <p>
                                为第五届字节跳动青训营后端项目实践内容，使用微服务架构。
                                本人在其中负责了社交模块的后端开发，运用了 PgSQL
                                存储用户私聊信息，并考虑到用户关系的复杂性，使用了图数据库
                                Neo4j 进行管理 。通过 Hertz
                                拦截网络请求后解析数据并验证合法性，然后通过
                                Kitex 调用相关微服务，相应微服务则通过 Gorm
                                或相应的驱动操作数据库并返回结果，有效实现了用户关注、私聊等功能。
                            </p>,
                        ],
                    ].map((project) => (
                        <PorjectDetail
                            {...{
                                name: project[0] as string,
                                time: project[1] as string,
                                link: project[2],
                                children: project[3],
                            }}
                        />
                    ))}
                </ul>
            </section>
            <section>
                <h2 className="text-h2">所获奖项</h2>
                <ul className="flex flex-col gap-2">
                    {[
                        [
                            "第 29 次 CCF 计算机软件能力认证 315 分",
                            "2023.03",
                            "排名：前 2.59%。",
                            "该认证为算法与程序设计能力认证。",
                        ],
                        [
                            "2022 CCF CCSP 全国赛铜奖",
                            "2022.12",
                            "",
                            "该认证为程序设计能力认证。",
                        ],
                        [
                            "蓝桥杯 第十四届 省赛一等奖",
                            "2023.04",
                            "C/C++ 程序设计大学 A 组 省赛一等奖。",
                            "该认证为算法设计能力认证。",
                        ],
                        [
                            "团体程序设计天梯赛 个人三等奖",
                            "2023.04",
                            "个人三等奖，201 分。",
                            "该认证为算法设计能力认证。",
                        ],
                        [
                            "全国大学生数学建模竞赛 省级三等奖",
                            "2023.11",
                            "湖北赛区 省级三等奖。",
                            "该比赛为数学建模能力比赛，本人在其中担任编程实现的角色。",
                        ],
                        [
                            "第十六届 中国大学生计算机设计大赛 省赛二等奖",
                            "2023.06",
                            "物联网应用大类 中南地区赛二等奖。",
                            "该比赛考察项目设计及开发能力。",
                        ],
                    ].map((award) => (
                        <CompetitionAward
                            {...{
                                title: award[0],
                                time: award[1],
                                award: award[2],
                                description: award[3],
                            }}
                        />
                    ))}
                </ul>
            </section>
        </main>
    );
}

function Link(
    props: React.DetailedHTMLProps<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        HTMLAnchorElement
    >
) {
    return <a target="_blank" className="text-link" {...props} />;
}

function PorjectDetail({
    name,
    time,
    link,
    children,
}: {
    name: string;
    time: string;
    link: React.ReactNode;
    children: React.ReactNode;
}) {
    return (
        <li className="m-s-4">
            <div className="flex items-center justify-between">
                <h3 className="text-h3">{name}</h3>
                <p className="text-p">{time}</p>
            </div>
            {link}
            {children}
        </li>
    );
}

function CompetitionAward({
    title,
    time,
    award,
    description,
}: {
    title: string;
    time: string;
    award: string;
    description: string;
}) {
    return (
        <li className="flex flex-col p-l-8">
            <div className="m-l--4 flex flex-row items-center justify-between">
                <h3 className="text-h3">{title}</h3>
                <p className="text-p">{time}</p>
            </div>
            <p className="text-p">{award}</p>
            <p className="text-p">{description}</p>
        </li>
    );
}

function UnorderedList({ list }: { list: string[] }) {
    return (
        <ul className="flex flex-col list-disc text-p">
            {list.map((item) => (
                <li className="m-s-8">{item}</li>
            ))}
        </ul>
    );
}
