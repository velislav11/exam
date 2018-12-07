
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
    $(".Ash-link").on("click", function () {
        HideAll();
        $("#ash").show()
    });
    $(".Ember-link").on("click", function () {
        HideAll();
        $("#ember").show()
    });
    $(".Excalibur-link").on("click", function () {
        HideAll();
        $("#excal").show()
    });
    $(".Frost-link").on("click", function () {
        HideAll();
        $("#frost").show()
    });
    $(".Garuda-linl").on("click", function () {
        HideAll();
        $("#garuda").show()
    });
    $(".Ivara-link").on("click", function () {
        HideAll();
        $("#ivara").show()
    });
    $(".Nekros-link").on("click", function () {
        HideAll();
        $("#nekraos").show()
    });
    $(".Nidus-link").on("click", function () {
        HideAll();
        $("#nidus").show()
    });
    $(".Nova-link").on("click", function () {
        HideAll();
        $("#nova").show()
    });
    $(".Rhino-link").on("click", function () {
        HideAll();
        $("#rhino").show()
    });
    $(".Saryn-link").on("click", function () {
        HideAll();
        $("#saryn").show()
    });

}


