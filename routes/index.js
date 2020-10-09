const Router = require("koa-router");
// const TestController = require('../controllers/test')

const router = new Router({
	prefix: "/api",
});

//测试api

router.get("/", async (ctx, next) => {
	await ctx.render("index", {
		title: "Hello Koa 2!",
	});
});
router.get("/string", async (ctx, next) => {
	ctx.body = "koa2 string";
});
router.get("/json", async (ctx, next) => {
	ctx.body = {
		title: "koa2 json",
		data: "data!",
	};
});

//公用api

//date
router.get("/date", async (ctx, next) => {
	let time = new Date();
	console.log(time);
	let str =
		time.getFullYear() + " / " + (time.getMonth() + 1) + " / " + time.getDate();
	ctx.body = {
		title: "date",
		code: 200,
		data: {
			year: time.getFullYear(),
			month: time.getMonth() + 1,
			date: time.getDate(),
			day: time.getDay(),
		},
	};
});

module.exports = router;
