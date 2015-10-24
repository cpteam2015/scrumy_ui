
Ext.define('Scrumy.view.main.Main', {
    extend: 'Ext.panel.Panel'
    ,requires : ['Scrumy.view.main.MainModel']
    ,xtype: 'app-main'
    ,title: 'Scrumy'
    ,viewModel : {type: 'main'}
    ,padding: '0 0 0 10' 
    ,items: [
    	{
    		xtype: 'panel'
    		,region: 'center'
    		,tbar : [
    			{
		    		xtype : 'combobox'
		    		,editable : false
		    		,fieldLabel: 'Choose a project'
		    		,name:'project'
		    		,displayField: 'name'
		    		,valueField: '_id'
		    		,bind:{
		    			store: '{projects}'
		    		}
		    	}
		    	,{
		    		xtype : 'button'
		    		,text : 'Create a fresh one'
		    	}
    		]
    	}
    ] 
});
