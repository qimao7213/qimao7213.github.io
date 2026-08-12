<h2 id="publications">论文成果</h2>

<div class="publications">
<ol class="bibliography">

<h3 class="pub-category">一作 / 学生一作</h3>
{% for link in site.data.publications.first_author %}
{% include publication-item.html link=link %}
{% endfor %}

<h3 class="pub-category">正在进行的研究</h3>
{% for link in site.data.publications.ongoing %}
{% include publication-item.html link=link %}
{% endfor %}

<h3 class="pub-category">合作论文</h3>
{% for link in site.data.publications.collaboration %}
{% include publication-item.html link=link %}
{% endfor %}

</ol>
</div>
