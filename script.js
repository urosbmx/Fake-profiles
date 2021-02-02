// Api za fake profile

let api =  "601058ed0519445cb42d9e6c";


$.ajax({
	type: 'GET',
	url: 'https://randomuser.me/api/?results=100',
	dataType: "JSON", // data type expected from server
	success: function (data) {
        let  image=  data.results;
        for(i=0; i<10; i++){
            // console.log(data.results[i].picture.medium);
            $( ".profiles" ).append(`<div class="test"><div class="profiles-round-name"></div><img src="${data.results[i].picture.medium}" class="profiles-round"></div>` );
        }

          
        $.each( image, function( key, value ) {
            console.log(value);
            let roundImage = value.picture.large;
            let name=value.name.first;
            let last=value.name.last;
            // console.log(value.location);

            let adress = value.location.street.name + " " +value.location.street.number;
            let City = value.location.city;
            let State = value.location.state;
            let country = value.location.country;
      


            $(".row-profile").append(`

<div class="col-sm-3 information">
    <div class="col-sm-12 profile-border" >
        <div class="imagr-round">
            <img src="${roundImage}" class="imagr-round img-responsive center-block" >
        </div>
            <p class="heder-name"> ${name + " " + last} </p>
            <div class="profile-infromation">

            <p>Adress: ${adress} </p>
            <p>City: ${City} </p>
            <p>State: ${State} </p>
            <p>County: ${country} </p>


            
            </div>
            
    </div>
</div>

`)
          });
	},

});
