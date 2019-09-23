fetch("https://api.myjson.com/bins/yr3mh",{
                    method: 'GET'})
.then(function(response){
                    if(response.ok){
                        return response.json()
                    }else{
                        throw new Error(response.statusText);
                    }
                }).then(function(json){
                    
                   app.dates=json.games
                app.locations=json.locations
                    
                }).catch(function(error){
                   console.log("Request failed: " + error.message);
                });

const app = new Vue({
	el:'#app',
	data:{
        view: 'home',
		dates:[],
        locations:[]
		
	}
   /* template: `
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>Time</th>
                                                <th>Location</th>
                                                <th>Team</th>
                                                <th>Oppponent</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="date in dates">
                                                <td> {{this.dates.date}} </td>
                                                <td>{{this.dates.time}}</td>
                                                <td>{{this.dates.location}}</td>
                                                <td>{{this.dates.team}} </td>
                                                <td>{{this.dates.opponent}} </td>

                                            </tr>
                                        </tbody>
                                    </table>  
                                ` */

	}); 

//https://api.myjson.com/bins/yr3mh