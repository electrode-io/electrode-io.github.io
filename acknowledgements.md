---
id: acknowledgements
title: Acknowledgements
layout: single
permalink: acknowledgements.html
---

We'd like to thank all of our contributors:

<div class="three-column">
  {% for author_col in site.data.acknowledgements %}
  <ul>
    {% for author in author_col %}
    <li>{{ author }}</li>
    {% endfor %}
  </ul>
  {% endfor %}
</div>
