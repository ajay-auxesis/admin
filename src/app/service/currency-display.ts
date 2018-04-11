interface Number
    {
    tofixedDown(digits:number);
    }
Number.prototype.tofixedDown = function (digits:number) {
        var re = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
        m = this.toString().match(re);
        return m ? parseFloat(m[1]) : this.valueOf();
};
