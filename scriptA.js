<script type="text/javascript"><!--
function texto(){
alert(frames['i'].document.getElementById('saludo').innerHTML);
}
function funcion(){
frames['i'].f2();
}
//--></script>

// Este iframe en html:
<h1>p1</h1>
<iframe name="i" src="p2.html" width="200" height="150"></iframe>
<p>
  <input type="button" onclick="texto()" value="Texto">
  <input type="button" onclick="funcion()" value="Función">
</p>
