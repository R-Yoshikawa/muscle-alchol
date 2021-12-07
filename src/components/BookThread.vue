<template>
<div>
<div style="border: 1px solid #F0F0F0; width: 90%; height: 160px; overflow: auto;">
<!-- 折りたたみ展開ボタン -->
<div onclick="obj=document.getElementById('menu1').style; obj.display=(obj.display=='none')?'block':'none';">
<a style="cursor:pointer;">▼ スレッド</a>
</div>
<!--// 折りたたみ展開ボタン -->
  
<!-- ここから先を折りたたむ -->
<div id="menu1" style="display:none;clear:both;">
 
<!--この部分が折りたたまれ、展開ボタンをクリックすることで展開します。-->
 <ul style="list-style: none;">
   <li>yata333333</li>
   <li>yasuda</li>
   <li>yoshikawa</li>
  <li>yata</li>
   <li>yasuda</li>
   <li>yoshikawa</li>
  <li>yata</li>
   <li>yasuda</li>
   <li>yoshikawa</li>
 </ul>
</div>
<!--// ここまでを折りたたむ -->
</div>

<div style="border: 1px solid #F0F0F0; width: 90%; height: 160px; overflow: auto;">
<!-- 折りたたみ展開ボタン -->
<div onclick="obj=document.getElementById('menu2').style; obj.display=(obj.display=='none')?'block':'none';">
<a style="cursor:pointer;">▼ レビュー</a>
</div>
<!--// 折りたたみ展開ボタン -->
  
<!-- ここから先を折りたたむ -->
<div id="menu2" style="display:none;clear:both;">
 
<!--この部分が折りたたまれ、展開ボタンをクリックすることで展開します。-->
 <ul style="list-style: none;">
   <li>yatayatayatayatayatayatayatayatayatayatayatayatayatayatayatayata 
     <br>
     yatayatayatayatayatayatayatayatayatayatayatayatayatayatayatayatayata
   </li>
   <li>yasuda</li>
   <li>yoshikawa</li>
   
   <li>yata</li>
   <li>yasuda</li>
   <li>yoshikawa</li>
   
   <li>yata</li>
   <li>yasuda</li>
   <li>yoshikawa</li>
 </ul>
</div>
<!--// ここまでを折りたたむ -->
</div>
<form action="#" method="post">

	<p>入力内容：<br>
<textarea name="comment" cols="30" rows="5"></textarea></p>
</form>
<button type="submit">返信</button>
<form action="#" method="post">

	<p>入力内容：<br>
<textarea name="comment" cols="30" rows="5"></textarea></p>
</form>
<button>投稿</button>
<button>いいね</button>
</div>


</template>

<script>

</script>


