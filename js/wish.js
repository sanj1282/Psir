$(function(){var e=$("#flame"),a=$("h1");e.on({click:function(){e.removeClass("burn").addClass("puff"),$(".smoke").each(function(){$(this).addClass("puff-bubble")}),$("#glow").remove(),a.hide().html("It <b>will</b> come true..").delay(750).fadeIn(300),$("#candle").animate({opacity:".5"},100)}})});