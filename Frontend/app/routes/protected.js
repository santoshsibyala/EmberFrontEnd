import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  model(params){
debugger;
   var data =  $.get(`http://localhost:3000/api/getpost`);
  return data.then(raw => {
    //debugger;
        return raw.posts;
  });
}

});
