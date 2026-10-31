$(document).ready(function() {
    console.log("jQuery is ready!");

    $("#textBtn").click(function() {
        $("#welcome").text("Hello from jQuery!");
    });
    $("#htmlBtn").click(function() {
        $(".description").html("This text is <b>bold</b>.");
    });
    $("#colorBtn").click(function() {
        $("p").css("color", "blue");
    });

    $("#hideBtn").click(function() { $("#visibilityText").hide(); });
    $("#showBtn").click(function() { $("#visibilityText").show(); });
    $("#toggleBtn").click(function() { $("#visibilityText").toggle(); });

    $("#fadeInBtn").click(function() { $("#fadeImage").fadeIn(); });
    $("#fadeOutBtn").click(function() { $("#fadeImage").fadeOut(); });
    $("#fadeToggleBtn").click(function() { $("#fadeImage").fadeToggle(); });

    $("#slideUpBtn").click(function() { $("#slidePanel").slideUp(); });
    $("#slideDownBtn").click(function() { $("#slidePanel").slideDown(); });
    $("#slideToggleBtn").click(function() { $("#slidePanel").slideToggle(); });

    $("#appendBtn").click(function() {
        $("#studyList").append("<li>New item</li>");
    });
    $("#prependBtn").click(function() {
        $("#studyList").prepend("<li>First item</li>");
    });
    $("#removeBtn").click(function() {
        $("#studyList li:last").remove();
    });

    $("#imageBtn").click(function() {
        $("#changeImage").attr("src", "images/image2.svg");
    });
    $("#linkBtn").click(function() {
        $("#pageLink").attr("href", "effects.html");
        $("#pageLink").text("Go to Effects");
    });

    $("#nameInput").on("input", function() {
        $("#nameOutput").text($("#nameInput").val());
    });
    $("#emailInput").on("input", function() {
        $("#emailOutput").text($("#emailInput").val());
    });

    $("#basicBtn").click(function() {
        $("#basicBox").animate({ left: "110px", width: "100px", height: "100px" });
    });

    $("#sequenceBtn").click(function() {
        $("#sequenceBox").animate({ left: "120px" });
        $("#sequenceBox").animate({ top: "80px" });
        $("#sequenceBox").animate({ width: "30px", height: "30px" });
        $("#sequenceBox").animate({ left: "0px", top: "0px", width: "60px", height: "60px" });
    });

    $("#combinedBtn").click(function() {
        $("#combinedBox").animate({ left: "110px", top: "50px", width: "100px", height: "100px", opacity: 0.4 });
    });

    $("#resetBtn").click(function() {
        $(".box").stop(true, true);
        $(".box").css({ left: "0px", top: "0px", width: "60px", height: "60px", opacity: 1 });
    });

    $("#htmlSectionBtn").click(function() { $("#htmlContent").slideToggle(); });
    $("#cssSectionBtn").click(function() { $("#cssContent").slideToggle(); });
    $("#jquerySectionBtn").click(function() { $("#jqueryContent").slideToggle(); });
});
