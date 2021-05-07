Vue.component('personajes-table',{
    data() {
        return {
            personajes: null
        }
    },
    mounted() {
        this.getUser()
    },
    methods: {
        async getUser() {
            await fetch('https://swapi.dev/api/people/')
                .then(response => response.json())
                .then((response) => {
                    this.personajes = response.results;
                });
        }
    },
    template: `
       <div>
       <table>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Mass</th>
                <th>Height</th>
                <th>Gender</th>
            </tr>
            <tbody>
            <tr v-for="(personaje, index) in personajes" :key="personaje.name">
                <td>{{index}}</td>
                <td>{{personaje.name}}</td>
                <td>{{personaje.mass}}</td>
                <td>{{personaje.height}}</td>
                <td>{{personaje.gender}}</td>
            </tr>
            </tbody>
        </table>
        </div>
    `
});

Vue.component('personaje-card',{
    data() {
        return {
            personaje: null
        }
    },
    mounted() {
        this.getC3PO()
    },
    methods: {
        async getC3PO() {
            await fetch('https://swapi.dev/api/people/2')
                .then(response => response.json())
                .then((response) => {
                    this.personaje = response;
                });
        }
    },
    template: `
        <div id="c3po">
            <table>
              <tr>
                <th>Name:</th>
                <td>{{personaje.name}}</td>
              </tr>
              <tr>
                <th>Height:</th>
                <td>{{personaje.height}}</td>
              </tr>
              <tr>
                <th>Mass:</th>
                <td>{{personaje.mass}}</td>
              </tr>
              <tr>
                <th>Hair color:</th>
                <td>{{personaje.hair_color}}</td>
              </tr>
              <tr>
                <th>Skin color:</th>
                <td>{{personaje.skin_color}}</td>
              </tr>
              <tr>
                <th>Eye color:</th>
                <td>{{personaje.eye_color}}</td>
              </tr>
              <tr>
                <th>Birth year:</th>
                <td>{{personaje.birth_year}}</td>
              </tr>
              <tr>
                <th>Gender:</th>
                <td>{{personaje.gender}}</td>
              </tr>
            </table>
            <img src="./c3po.jpg" alt="C3PO">
        </div>
    `
});

new Vue({
    el: '#app',
    template: `
        <div>
            <h2>Main characters of Star Wars</h2>
            <personajes-table></personajes-table>
        </div> 
    `
});

new Vue({
    el: '#personaje',
    template: `
        <div>
            <h2>Character information</h2>
            <personaje-card></personaje-card>
        </div> 
    `
});