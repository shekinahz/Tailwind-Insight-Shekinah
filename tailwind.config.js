module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        InsightBanner: "url(/dist/img/banneryan.png)",
        projects1: "url(/dist/img/projects1.png)",
        projects2: "url(/dist/img/projects2.png)",
        projects3: "url(/dist/img/projects3.png)",
      },
      colors:{
        dark:"#2b2b2b",
        light:"#ffffff",
        redz: "#e64737",
        lightredz: "#ff4041",
      }
    },
  },
  plugins: [],
}