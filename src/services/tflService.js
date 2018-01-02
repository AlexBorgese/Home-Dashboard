export default function getTubeStatus() {
    fetch('https://api.tfl.gov.uk/Line/Mode/tube/Status', {
        app_id: '',
        app_key: ''
    })
        .then((response) => {
            console.log(response);

            return response;
        })
        .catch((err) => console.log(err));
}
