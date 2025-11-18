import arxiv
import os
import yaml

# Create a directory to store the markdown files
if not os.path.exists('_research'):
    os.makedirs('_research')

# Search for the latest AI papers
search = arxiv.Search(
  query = "cat:cs.AI",
  max_results = 10,
  sort_by = arxiv.SortCriterion.SubmittedDate
)

# Process each paper
for result in search.results():
    # Create a dictionary for the front matter
    front_matter = {
        'layout': 'paper',
        'title': result.title,
        'authors': [author.name for author in result.authors],
        'year': result.published.year,
        'pdf': result.pdf_url,
        'abstract': result.summary.replace('\n', ' ')
    }

    # Convert the front matter to a YAML string
    front_matter_yaml = yaml.dump(front_matter)

    # Create the markdown file content
    markdown_content = f"---\n{front_matter_yaml}---\n"

    # Create the markdown file name
    file_name = f"{result.entry_id.split('/')[-1]}.md"
    file_path = os.path.join('_research', file_name)

    # Write the content to the markdown file
    with open(file_path, 'w') as f:
        f.write(markdown_content)

    print(f"Created {file_path}")
