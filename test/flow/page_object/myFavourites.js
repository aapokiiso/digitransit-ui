'use strict'


var commands = {
    clickFavourites: function() {
        this.waitForElementVisible("@favouritePaneSelect", this.api.globals.elementVisibleTimeout);
        return this.click("@favouritePaneSelect");
    },
    addFavourite: function() {
        this.waitForElementVisible("@newFavouriteButtonContent", this.api.globals.elementVisibleTimeout);
        return this.click("@newFavouriteButtonContent");
    },
    enterAddress: function(addressSearch) {
        var timeout = this.api.globals.elementVisibleTimeout;
        this.waitForElementVisible("@addressPlaceholderNoSelect", timeout);
        this.click("@addressPlaceholderNoSelect");
        this.waitForElementVisible("@searchFavourite", timeout);
        this.setValue("@searchFavourite", addressSearch);
        this.api.pause(1000);
        return this.setValue("@searchFavourite", this.api.Keys.ENTER);
    },
    enterName: function(name) {
        return this.setValue("@nameInput", name);
    },
    clickHomeIcon: function() {
        return this.click("@homeIcon");
    },
    saveFavourite() {
        return this.click("@saveButton");
    },
    saveHomeFavourite: function(address, name) {
        return this.clickFavourites()
            .addFavourite()
            .enterAddress(address)
            .enterName(name)
            .clickHomeIcon()
            .saveFavourite();
    },
    verifyFirstHeader: function(header) {
        this.clickFavourites();
        this.waitForElementVisible("@favouriteLocationHeader", this.api.globals.elementVisibleTimeout);
        return this.assert.containsText("@favouriteLocationHeader", header);
    },
    verifyFavouriteInSearchResult: function(favouriteName) {
        this.api.useXpath();
        this.waitForElementPresent("//*/li[@class=\"react-autowhatever__item\"]/span[text()=\"" + favouriteName + "\"]", this.api.globals.elementVisibleTimeout);
        this.api.useCss();
    }
}

module.exports = {
    commands: [commands],
    elements: {
        favouritePaneSelect: {
            selector: ".hover + .favourites"
        },
        newFavouriteButtonContent: {
            selector: ".new-favourite-button-content"
        },
        addressPlaceholderNoSelect: {
            selector: ".address-placeholder "
        },
        searchFavourite: {
            selector: "input[type='text']"
        },
        nameInput: {
            selector: ".add-favourite-container__give-name input"
        },
        homeIcon: {
            selector: ".favourite-icon-table-column:nth-of-type(2)"
        },
        saveButton: {
            selector: ".add-favourite-container__save-button"
        },
        favouriteLocationHeader: {
            selector: ".favourite-location-header"
        }
    }
}
