public without sharing class CreateRecords {
    @AuraEnabled
    public static void createAccounts(String nombre, String apellido,String nombreempresa, String correo, String descripcion){
        Account acc = new Account();
        acc.Name = nombre + ' ' + apellido;
        acc.Nombre_Empresa__c = nombreempresa;
        acc.Correo_Electronico__c = correo;
        acc.Description = descripcion;
        try{
            insert acc;
        }
        catch(DmlException e){
            System.debug(e.getMessage());
        }

        Contact con = new Contact(
            FirstName=nombre,
            LastName=apellido,
            Email = correo,             
            AccountId=acc.Id);
        System.debug('+++++' + con);    
        try{
            insert con;
        }
        catch(DmlException e){
            System.debug(e.getMessage());
        } 
        Case case1 = new Case();
        case1.Status = 'New';
        case1.Origin = 'Web';
        case1.Priority = 'Medium';
        case1.AccountId = acc.Id;
        try{
            insert case1;
        }
        catch(DmlException e){
            System.debug(e.getMessage());
        } 

    }
}
