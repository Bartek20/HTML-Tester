function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms));}

function select()
{
    var header_left;
    var header_search;
    var header_right;
    var header_mobile;
    var header_toggle;
    var retry = 0;
    
    try
    {
        header_left = document.querySelector("#gatsby-focus-wrapper > header > div.css-1dsmrkm > div.css-gs045i > div");
        header_search = document.querySelector("#gatsby-focus-wrapper > header > div.css-1dsmrkm > div.css-gs045i > button");
        header_right = document.querySelector("#gatsby-focus-wrapper > header > div.css-1dsmrkm > div.css-1k1ocop");
        header_mobile = document.querySelector("#gatsby-focus-wrapper > header > div.css-1brxi1h");
        header_toggle = document.querySelector("#gatsby-focus-wrapper > header > div.css-1dsmrkm > svg");
        if ((header_left == null) || (header_search == null) || (header_right == null) || (header_mobile == null) || (header_toggle == null))
        {
            throw "NULL Err";
        }
    }
    catch (err)
    {
        if (err == "NULL Err")
        {
            sleep(100);
            retry++;
            if (retry <= 99)
            {
                console.log("Próba", retry);
                select();
            }
            else
            {
                console.log("Niepowodzenie...");
            }
        }
        else
        {
            header_left.remove();
            header_search.remove();
            header_right.remove();
            header_mobile.remove();
            header_toggle.remove();

            w.terminate();
        }
    }
};

select();