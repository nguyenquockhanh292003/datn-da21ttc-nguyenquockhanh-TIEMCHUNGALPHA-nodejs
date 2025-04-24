const jwt = require('jsonwebtoken');

class SitesQuery {
    
    async HomeVacxin(req, res) {
        res.status(200).render('pages/home_vacxin', { layout: 'main_user'});
    }

    async PriceList(req, res) {
        res.status(200).render('pages/price_list', { layout: 'main_user'});
    }

    async Overview(req, res) {
        res.status(200).render('pages/overview', { layout: 'main_user'});
    }

    async DetailsVacxin(req, res) {
        res.status(200).render('pages/details_vacxin', { layout: 'main_user'});
    }

    async HomeTinTuc(req, res) {
        res.status(200).render('pages/home_tintuc', { layout: 'main_user'});
    }

    async DetailsTinTuc(req, res) {
        res.status(200).render('pages/details_tintuc', { layout: 'main_user'});
    }

    async Home(req, res) {
        res.status(200).render('pages/home', { layout: 'main_user'});
    }

    // Render login page
    login(req, res) {
        res.status(200).render('Login', { layout: 'Login'});
    }
    async Index(req, res, next) {
        res.status(200).render("pages/main", {
            layout: "main",
        });
    }

};

module.exports = new SitesQuery;