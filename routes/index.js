const Router = require("koa-router");
const TestController = require("../controllers/test");

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
let ctx = {
	request: {
		body: {
			id: 1,
			title: "123",
			author: "Congb19",
			content: "123123",
			category: "ghs",
		},
	},
};
// TestController.create(ctx);

// console.log("okokokok");
module.exports = router;
