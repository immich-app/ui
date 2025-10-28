export class SvelteFile {
  private scripts: string[] = [];
  private lines: string[] = [];
  private closingTags: string[] = [];

  addScript(line: string) {
    if (line) {
      this.scripts.push(line);
    }
    return this;
  }

  addTemplate(line: string) {
    this.lines.push(line);
    return this;
  }

  addTag(tag: string, closingTag: string) {
    this.lines.push(tag);
    this.closingTags.push(closingTag);
  }

  export() {
    const lines: string[] = [];

    lines.push(`<script lang="ts">`);
    for (const line of this.scripts) {
      lines.push('  ' + line);
    }
    lines.push('</script>');

    for (const line of this.lines) {
      lines.push(line);
    }

    for (const line of this.closingTags.toReversed()) {
      lines.push(line);
    }

    return lines.join('\n');
  }
}
