<script>
  let count = 0;

  const increment = () => {
    count += 1;
  };
</script>

<button class="btn btn-primary btn-lg rounded" on:click={increment}>
  Clicks: {count}
</button>
