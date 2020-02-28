"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const logIn_1 = __importDefault(require("./routes/logIn"));
const signUp_1 = __importDefault(require("./routes/signUp"));
const fetchUser_1 = __importDefault(require("./routes/fetchUser"));
const addContacts_1 = __importDefault(require("./routes/addContacts"));
const logOut_1 = __importDefault(require("./routes/logOut"));
const app = express_1.default();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(cookie_parser_1.default());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.use(logIn_1.default);
app.use(signUp_1.default);
app.use(fetchUser_1.default);
app.use(addContacts_1.default);
app.use(logOut_1.default);
//mongoose.Promise=global.Promise;
mongoose_1.default.set('useUnifiedTopology', true);
mongoose_1.default.connect('mongodb://localhost:27017/ContactAPP', {
    useNewUrlParser: true
}).then((res) => {
    console.log('Connected to Db');
}, (err) => {
    console.log('Not connected to Db');
});
app.use((req, res) => {
    res.status(404).render('404.ejs', { pageTitle: 'Page Not Found' });
});
app.listen(3030, () => {
    console.log('Server is listening');
});
