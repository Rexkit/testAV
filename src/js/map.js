function initMap() {
    const mainPlace = {
        lat: 55.71125079999999,
        lng: 37.65270669999995
    };

    let map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 16, center: mainPlace
    });

    const contentString = `
        <div class="content">
            <img class="content__img" src="./img/mapImg.PNG" alt="img">
            <p class="content__text">г. Москва, м. Автозаводская,
            ул. Ленинская Слобода, д. 26, стр.6
            бизнес центр «Симонов плаза»</p>
        </div>
    `;

    let infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 450
    })

    const mapImage = '/src/img/Oval%202.png';

    let marker = new google.maps.Marker({
        position: mainPlace,
        map: map,
        icon: mapImage
    });

    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });

    map.addListener('click', function() {
        infowindow.close(map, marker);
    });
}