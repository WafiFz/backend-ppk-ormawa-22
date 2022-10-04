import App from '@/app';
import validateEnv from '@utils/validateEnv';
import AuthAdminRoute from '@routes/authAdmin.route';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import PupukRoute2 from '@routes/pupuk2.route';
import SampahRoute2 from '@routes/sampah2.route';

validateEnv();

const app = new App([new IndexRoute(), new UsersRoute(), new AuthRoute(), new AuthAdminRoute(), new PupukRoute2(), new SampahRoute2()]);

app.listen();
