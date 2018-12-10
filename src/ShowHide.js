
function ShowHide() {
    HideAll()
    $(".wiki-h2").show()
    $(".main").show()


}

function HideAll() {
    $(".main").hide()
    $(".Story").hide()
    $(".warframes-display").hide()
    $(".more-info").hide()
    $(".wiki-h2").hide()
    $("#all-warframes").hide()
    $("#ash").hide()
    $("#ember").hide()
    $("#excal").hide()
    $("#frost").hide()
    $("#garuda").hide()
    $("#ivara").hide()
    $("#nekraos").hide()
    $("#nidus").hide()
    $("#nova").hide()
    $("#rhino").hide()
    $("#saryn").hide()
    $(".main-weapons").hide()
    $(".main-companions").hide()
    $(".companions-displey").hide()
    $(".carrrire").hide()
    $(".djinn").hide()
    $(".taxon").hide()
    $(".chesa-kubrow").hide()
    $(".helminth-charger").hide()
    $(".adarza-kavat").hide()
    $(".all-factions").hide()
    $(".all-archwing").hide()
    //abc
}

function AtachEvents() {
    $(".Home-Link").on("click", function () {
        HideAll()
        $(".main").show()
        $(".wiki-h2").show()
    });
    $(".Story-Link").on("click", function () {
        HideAll()
        $(".Story").show()
    });
    $(".more-info-for-new-players-link").on("click", function () {
        HideAll()
        $(".more-info").show()
    });
    $(".warframes-a-img").on("click", function () {
        HideAll();
        $(".warframes-display").show()
        $(".wiki-h2").show()

    });
    $(".faction-a-img").on("click", function () {
        HideAll();
        $(".all-factions").show()
        $(".wiki-h2").show()

    });
    $(".archwing-a-img").on("click", function () {
        HideAll();
        $(".all-archwing").show()
        $(".wiki-h2").show()

    });
    $(".Ash-link").on("click", function () {
        HideAll();
        $("#all-warframes").show()
        $("#ash").show()
    });
    $(".Ember-link").on("click", function () {
        HideAll();
        $("#all-warframes").show()
        $("#ember").show()
    });
    $(".Excalibur-link").on("click", function () {
        HideAll();
        $("#all-warframes").show()
        $("#excal").show()
    });
    $(".Frost-link").on("click", function () {
        HideAll();
        $("#all-warframes").show()

        $("#frost").show()
    });
    $(".Garuda-linl").on("click", function () {
        HideAll();
        $("#all-warframes").show()
        $("#garuda").show()
    });
    $(".Ivara-link").on("click", function () {
        HideAll();
        $("#all-warframes").show()
        $("#ivara").show()
    });
    $(".Nekros-link").on("click", function () {
        HideAll();
        $("#all-warframes").show()
        $("#nekraos").show()
    });
    $(".Nidus-link").on("click", function () {
        HideAll();
        $("#all-warframes").show()
        $("#nidus").show()
    });
    $(".Nova-link").on("click", function () {
        HideAll();
        $("#all-warframes").show()
        $("#nova").show()
    });
    $(".Rhino-link").on("click", function () {
        HideAll();
        $("#all-warframes").show()
        $("#rhino").show()
    });
    $(".Saryn-link").on("click", function () {
        HideAll();
        $("#all-warframes").show()
        $("#saryn").show()
    });
    $(".warframe-display-back").on("click", function () {
        HideAll();
        $(".warframes-display").show()
        $(".wiki-h2").show()
    });
    $(".companions-display-back").on("click", function () {
        HideAll();
        $(".main-companions").show();
        $(".wiki-h2").show()
    });
    $(".wepons-a-img").on("click", function () {
        HideAll();
        $(".wiki-h2").show()
        $(".main-weapons").show();
    });
    $(".companions-a-img").on("click", function () {
        HideAll();
        $(".wiki-h2").show()
        $(".main-companions").show();
    });
    $("#carrier").on("click", function () {
        HideAll();
        $(".wiki-h2").show()
        $(".companions-displey").show()
        $(".carrrire").show()
    });
    $("#djinn").on("click", function () {
        HideAll();
        $(".wiki-h2").show()
        $(".companions-displey").show()
        $(".djinn").show()
    });
    $("#taxon").on("click", function () {
        HideAll();
        $(".wiki-h2").show()
        $(".companions-displey").show()
        $(".taxon").show()
    });
    $("#chesa-kubrow").on("click", function () {
        HideAll();
        $(".wiki-h2").show()
        $(".companions-displey").show()
        $(".chesa-kubrow").show()
    });
    $("#helminth-charger").on("click", function () {
        HideAll();
        $(".wiki-h2").show()
        $(".companions-displey").show()
        $(".helminth-charger").show()
    });
    $("#adarza-kavat").on("click", function () {
        HideAll();
        $(".wiki-h2").show()
        $(".companions-displey").show()
        $(".adarza-kavat").show()
    });
}


