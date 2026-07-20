/**
 * Zeta 战队站点配置
 * 改成员 / 奖项 / 联系方式只编辑本文件。
 * name：展示用 ID/昵称。
 * blog：完整 URL；无博客可写 "#" 或空字符串。
 * avatar：头像图床/本地路径；留空则显示 name 首字母。
 */
window.ZETA_DATA = {
  site: {
    name: "Zeta",
    org: "杭州电子科技大学信息工程学院",
    qqGroup: "689259559",
    wechatLabel: "微信公众号"
  },
  directions: ["All", "Web", "Pwn", "Reverse", "Crypto", "Misc"],
  members: [
    {
      name: "Hurkin",
      direction: "Misc",
      bio: "Something for nothing.",
      blog: "http://www.hurkin.top/",
      avatar: "https://weavatar.com/avatar/605ccd4cc2149fa90a6b849274e514afb8b97ff0df586ce405eec556915efc27?s=96&r=g"
    },
    {
      name: "luxlu",
      direction: "Misc",
      bio: "天天开心^_^",
      blog: "http://www.luxlu.top/",
      avatar: "https://luxlu.top/img/avatar.jpg"
    }
  ],
  awards: [
    {
      year: "2026",
      title: "第十九届全国大学生信息安全竞赛暨第二届「长城杯」铁人三项赛半决赛",
      place: "一等奖",
      note: "",
      top: true
    },
    {
      year: "2026",
      title: "全国大学生信息安全与对抗技术竞赛",
      place: "一等奖",
      note: "",
      top: true
    },
    {
      year: "2026",
      title: "浙江省大学生网络与信息安全竞赛",
      place: "一等奖",
      note: "",
      top: false
    },
    {
      year: "2025",
      title: "浙江省大学生网络与信息安全竞赛",
      place: "一等奖",
      note: "",
      top: false
    }
  ],
  benefits: [
    {
      title: "竞赛与学分",
      desc: "学院竞赛目录中的网络安全赛事，参赛队员均从战队选拔。获奖可按学生手册认定相应学分与成绩加分。"
    },
    {
      title: "资料与答疑",
      desc: "提供内部知识库与入门路径整理；招新群内有学长学姐在线答疑，便于系统推进学习。"
    },
    {
      title: "线下赛支持",
      desc: "大名单内线下赛的酒店及高铁、机票费用由学院统一报销。"
    },
    {
      title: "经历沉淀",
      desc: "实验室与战队学习、竞赛实践经历，有助于夯实专业能力并提升简历竞争力。"
    }
  ]
};
