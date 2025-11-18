---
layout: default
title: Research
---

## Latest Research

<ul>
{% assign papers = site.research | sort: 'title' %}
{% for paper in papers %}
  <li><a href="{{ paper.url }}">{{ paper.title }}</a></li>
{% endfor %}
</ul>
