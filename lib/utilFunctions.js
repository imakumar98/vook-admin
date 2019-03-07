module.exports = {
    getCapitalizedString: function(string){
        if(string=='ncert') return string.toUpperCase();
        return string[0].toUpperCase() + string.slice(1);
    },
    titleToSlug: function(title){
        return title.trim().toLowerCase().replace(/ /g,'-');
    },
    resetSelectElement: function(selectElement){
        selectElement.selectedIndex = 0;
    },
    getDateFromDateTime: function(string){
        const date = new Date(string);
        return date.getDay() + '-' + (date.getMonth()+ 1) + '-' + date.getFullYear();
    }
}