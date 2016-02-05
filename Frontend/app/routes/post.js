import Ember from 'ember';

export default Ember.Route.extend({
  model(params){

   var data =  $.get(`http://localhost:3000/api/getpost`);
  return data.then(raw => {
    //debugger;
        return raw.posts;
  });
}
});
