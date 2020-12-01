class MainPage{
    constructor(page){
        this.page = page;
    }

    btnDangNhap = `xpath=//*[@id='page']/div[@class='header']//a[text()='Đăng nhập']`;
    txtUsername = `xpath=//*[@id='frmLoginFull']//input[@name='username']`;
    txtPassword = `xpath=//*[@id='frmLoginFull']//input[@name='password']`;
    btnDangNhap2 = `xpath=//*[@id='frmLoginFull']//button[@type='submit']`;

    async login(username, password){
        // to do
        await this.page.click(this.btnDangNhap);
        await this.page.fill(this.txtUsername, username);
        await this.page.fill(this.txtPassword, password);
        await this.page.click(this.btnDangNhap2);
        await this.page.waitForNavigation({waitUntil: `domcontentloaded`});
    }
}

module.exports = {
    MainPage,
}