import { App } from "@tinyhttp/app";

const app = new App();

app.get('/', (req, res) => {
	res.json({ status: "ok", message: "Hello, EC2 from task 3.3" });
});

const port = process.env.PORT ?? 3000;

console.info(`App is running on port: ${port}`); 

app.listen(process.env.PORT ?? 3000);
