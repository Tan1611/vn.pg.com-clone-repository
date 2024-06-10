import LandingPage from '../Page/HomePage/HomePage';
import AdChoices from '../Page/AdChoices/AdChoices.jsx';
import NotFoundPage from '../Page/NotFoundPage/NotFoundPage.jsx';
import ContactUs from '../Page/ContactUs/ContactUs.jsx';
import CrueltyFreePage from '../Page/CrueltyFreePage/layout.jsx';
import GenderEquality from '../Page/GenderEquality/GenderEquality.jsx';
import Investors from '../Page/Investors/Investors.jsx';
import Location from '../Page/Location/Location.jsx';
import PeopleWithDisabilities from '../Page/PeopleWithDisabilities/PeopleWithDisabilities.jsx';
import PolicyAndEnforcement from '../Page/PolicyAndEnforcement/PolicyAndEnforcement.jsx';
import ProductSafety from '../Page/ProductSafety/layout.jsx';
import Renewed from '../Page/Renewed/Renewed.jsx';
import SignInSignUp from '../Page/SignInSignUp/SignInSignUp.js';
export const routes = [
    {
        path: '/',
        page: LandingPage,
    },
    {
        path: '/AdChoices',
        page: AdChoices,
    },
    {
        path: '/ContactUs',
        page: ContactUs,
    },
    {
        path: '/CrueltyFreePage',
        page: CrueltyFreePage,
    },
    {
        path: '/GenderEquality',
        page: GenderEquality,
    },
    {
        path: '/Investors',
        page: Investors,
    },
    {
        path: '/Location',
        page: Location,
    },
    {
        path: '/PeopleWithDisabilities',
        page: PeopleWithDisabilities,
    },
    {
        path: '/PolicyAndEnforcement',
        page: PolicyAndEnforcement,
    },
    {
        path: '/ProductSafety',
        page: ProductSafety,
    },
    {
        path: '/Renewed',
        page: Renewed,
    },
    {
        path: '/SignInSignUp',
        page: SignInSignUp,
    },
    {
        path: '*',
        page: NotFoundPage,
    },
];
