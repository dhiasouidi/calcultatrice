function ajouternbr(id)
{
    document.calc.resultat.value+=id;
}
function viderecran() 
{
    document.calc.resultat.value="";
}
function suppdernier()
{
    var str=document.calc.resultat.value;
    document.calc.resultat.value=str.substring(0, str.length - 1);
}
function calculer()
{

    try 
    {
        var res = eval(document.calc.resultat.value);
        document.calc.resultat.value=res;
    } 
    catch(err)
    {
          document.calc.result.value="Error";
    }


}