Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    items:[{html:'This is my first APP'},{xtype: 'rallyiterationcombobox'}],
    launch: function() {
        //Write app code here
        console.log('this is version2 !');
        this.add ({
            xtype: 'rallygrid',
            columnCfgs: [ 'FormattedID',
                          'Name',
                          'State',
                          'SubmittedBy'
                          ],
                     storeConfig: {
                     model: 'defect'
                 }
        })

        //API Docs: https://help.rallydev.com/apps/2.0/doc/
    }
    
    _loadGrid : function() {
        
    }
    
});
