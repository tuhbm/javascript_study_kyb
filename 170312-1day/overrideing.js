function sports(){
    function baseball(){
        console.log('LG');
    }
    baseball();
    function baseball(){
        console.log('SK');
    }
}
sports();

function sports2(){
    var ski = function(){
        console.log('ok');
    };
    ski();
    var ski = function(){
        console.log('sorry');
    }
}
sports2();
function sports3(){
    function soccer(){
        console.log('daejeon');
    }
    soccer();
    var soccer = function(){
        console.log('inchoen');
    }
}
sports3();

function sports4() {
    var basketball = function(){
        console.log('good');
    };
    basketball();
    function basketball(){
        console.log('bad');
    }
}
sports4();