import App from "./app"
import AboutRoute from "./domain/about/about.route"
import ContactRoute from "./domain/contact/contact.route"
import HomeRoute from "./domain/home/home.route"
import InteryerRoute from "./domain/interyer/interyer.route"
import MenuRoute from "./domain/menu/menu.route"
import PayRoute from "./domain/pay/pay.route"
import ReservationRoute from "./domain/reservation/reservation.route"
import UserRoute from "./domain/user/user.route"

const app = new App([
	new HomeRoute(), 
	new ReservationRoute(),
	new MenuRoute(),
	new InteryerRoute(),
	new AboutRoute(),
	new ContactRoute(),
	new PayRoute(),
	new UserRoute()
])

app.run()

// app.get('/', (req, res)=>{
// 	res.render('index', {title: 'Ana Sehife'});
// });
// app.get('/rezervasiya', (req, res)=>{
// 	res.render('reservation', {title: 'Rezervasiya'});
// });
// app.get('/menyu', (req, res)=>{
// 	res.render('menu', {title: 'Menyu'});
// })
// app.get('/interyer', (req, res)=>{
// 	res.render('interyer', {title: 'Interyer'});
// })
// app.get('/haqqimizda', (req, res)=>{
// 	res.render('about', {title: 'Haqqimizda'});
// });
// app.get('/elaqe', (req, res)=>{
// 	res.render('contact', {title: 'Contact'})
// });
// app.get('/signin', (req, res)=>{
// 	res.render('signin', {title: 'Admin Giris'})
// });

// app.get('/pay', (req, res)=>{
// 	res.render('pay', {title: 'Odenis'})
// });
// app.get((req, res)=> {
// 	res.status(404).render('404', {title: 'Not Found'})
// })