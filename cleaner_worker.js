function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms));}

var header_left;
var header_search;
var header_right;
var header_mobile;
var header_toggle;

function select(retry) {   
    try {
        header_left = document.querySelector("#gatsby-focus-wrapper > header > div.css-1dsmrkm > div.css-gs045i > div");
        header_search = document.querySelector("#gatsby-focus-wrapper > header > div.css-1dsmrkm > div.css-gs045i > button");
        header_right = document.querySelector("#gatsby-focus-wrapper > header > div.css-1dsmrkm > div.css-1k1ocop");
        header_mobile = document.querySelector("#gatsby-focus-wrapper > header > div.css-1brxi1h");
        header_toggle = document.querySelector("#gatsby-focus-wrapper > header > div.css-1dsmrkm > svg");
        if ((header_left == null) || (header_search == null) || (header_right == null) || (header_mobile == null) || (header_toggle == null)) {
            throw "NULL Err";
        }
    }
    catch (err) {
        if (err == "NULL Err") {
            sleep.apply(100).then(() => {
                retry++;
                if (retry <= 99) {
                    console.log("Próba", retry);
                    select();
                } else {
                    console.log("Niepowodzenie...");
                }
            });
        } else {
            header_left.remove();
            header_search.remove();
            header_right.remove();
            header_mobile.remove();
            header_toggle.remove();
        }
    }
}

select(0);