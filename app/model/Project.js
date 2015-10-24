Ext.define('Scrumy.model.Project',{
	extend: 'Ext.data.Model'
	,fields: ['_id','name','members','description','git_repo','backlog','sprints']
	,idProperty: '_id'
	,proxy:{
		type: 'rest'
		,url: 'http://localhost:9292/api/v1/mockups/p'
		,reader: {
			type: 'json'
		}
	}
});