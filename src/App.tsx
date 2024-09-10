import {
    BytedanceLogoSvg,
    GithubFillSvg,
    LinkSvg,
    MailLineSvg,
    TencentLogoIcon,
    WhuLogoSvg,
} from "./svg";
import { box } from "./box";

export default function App() {
    const { name, email } = box;
    return (
        <main className="m-x-auto h-full max-w-968px flex flex-col gap-2 p-2">
            <main>
                <h1 className="text-h1">{name}</h1>
            </main>
            <section>
                <h2 className="text-h2">自我介绍</h2>
                <UnorderedList
                    list={[
                        "熟悉 C++, Python, Typescript 等各类语言的使用和编写，具有较强的编码实现能力。",
                        "掌握 Git 的使用，了解 Linux 常用命令。",
                        "拥有优秀的搜索能力和自我学习能力和基本的计算机科学知识与科学素养，对于新技术的学习热情高。",
                    ]}
                />
            </section>
            <section>
                <h2 className="text-h2">教育经历</h2>
                <div className="flex justify-between">
                    <h3 className="flex items-center gap-2 text-h3 font-normal">
                        <WhuLogoSvg className="h-8" />
                        <span>武汉大学·本科</span>
                    </h3>
                    <span>2021.09 ~ 至今</span>
                </div>
                <UnorderedList
                    list={[
                        "主修专业：计算机科学与技术。GPA: 3.76/4.0。",
                        "科目成绩：数据结构、计算机网络、高级语言程序设计、计算机组成与设计等均取得了满绩的成绩",
                        "在校荣誉：乙等奖学金、三好学生、国家励志奖学金、校级社会活动积极分子等。",
                    ]}
                />
            </section>
            <section>
                <h2 className="text-h2">科研竞赛</h2>
                <div className="flex justify-between">
                    <h3 className="m-s-4 flex items-center gap-2 text-h3 font-normal">
                        <span>全国大学生数学建模竞赛</span>
                    </h3>
                </div>
                <UnorderedList
                    list={[
                        "参与了“多波束测线问题”的研究，在其中主要担任编程实现的角色。",
                        "使用 Python 语言进行数据读取，实现模型，绘制三维海底地形图以及航线图，并计算最优的测线角度。",
                        "最终获得了省级三等奖的成绩。",
                    ]}
                />
                <div className="flex justify-between">
                    <h3 className="m-s-4 flex items-center gap-2 text-h3 font-normal">
                        <span>校级大创项目</span>
                    </h3>
                </div>
                <UnorderedList
                    list={[
                        "主要研究在单片机上的 AI 模型的推理，以此实现低功耗情况下对于管道的智能识别和病虫害识别。",
                        "使用该项目参加了计算机设计大赛，取得了省级二等奖的成绩。",
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
                            <p>
                                为个人所做的听音识曲小游戏。音乐获取与使用采用了消费者生产者模型，实现音乐的预获取。优化方面，使用了
                                CDN 加快下载速度，并优化了 React 和浏览器渲染。
                            </p>,
                        ],
                        [
                            "东方角色识别模型程序",
                            "",
                            <></>,
                            <p>
                                使用 Pytorch 搭建过多层 CNN
                                模型，并收集数据集进行训练，以此来进行角色分类的。并通过
                                C++ 的 Qt 编写了简单的客户端调用模型进行分类。
                            </p>,
                        ],
                        [
                            "RT-Thread 物联网操作系统移植",
                            "",
                            <></>,
                            <p>
                                将 RT-Thread
                                物联网操作系统移植到了一个全新的平台上。通过使能中断并设置时钟中断实现了操作系统的时钟周期，并通过完善编写汇编函数以实现切换线程过程中包括寄存器的上下文切换。
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
                <h2 className="text-h2">算法竞赛奖项</h2>
                <ul className="flex flex-col gap-2">
                    {[
                        [
                            "第 34 次 CCF 计算机软件能力认证 430 分",
                            "2024.06",
                            "",
                            "",
                        ],
                        [
                            "蓝桥杯第十四届软件赛 C/C++ 程序设计大学 A 组 省赛一等奖",
                            "2023.04",
                            "",
                            "",
                        ],
                        [
                            "团体程序设计天梯赛 个人三等奖 201 分",
                            "2023.04",
                            "",
                            "",
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
            <section>
                <h2 className="text-h2">实习经历</h2>
                <div className="flex justify-between">
                    <h3 className="flex items-center gap-2 text-h3 font-normal">
                        <div className="h-8 w-8 overflow-clip">
                            <BytedanceLogoSvg className="h-8 min-w-max" />
                        </div>
                        <span>字节跳动·前端开发实习生</span>
                    </h3>
                    <span>2023.12 ~ 2024.03</span>
                </div>
                <UnorderedList
                    list={[
                        "飞书前端开发实习生，业务方向为飞书多维表格业务侧前端的开发。",
                        "修复安全、体验问题，完善搜索、筛选功能，扩展字段填写方式。",
                    ]}
                />
                <div className="flex justify-between">
                    <h3 className="flex items-center gap-2 text-h3 font-normal">
                        <div className="h-8 w-8 overflow-clip">
                            <TencentLogoIcon className="h-8 min-w-max" />
                        </div>
                        <span>腾讯·前端开发实习生</span>
                    </h3>
                    <span>2024.06 ~ </span>
                </div>
                <UnorderedList
                    list={[
                        "腾讯视频前端开发实习生，业务方向为在线视频会员业务的开发。",
                    ]}
                />
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
