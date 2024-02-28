function arrayToTree(data) {
  // 存放结果
  const result = [];
  /**
   * 核心变量，保存着每个节点的数据，以 id 为键
   * 每个节点中有一个 children 属性，它的数据是 itemMap 的某个属性值
   * C 节点存储 A 节点的数据，B 节点存储 C 节点的数据，以此类推，这样就实现了无限深度的树
   */
  const itemMap = {};

  // 使用 for 或者 for...of 提升效率，不要使用 forEach
  for (let item of data) {
    const { id, pid } = item;

    /**
     * 把每个节点都保存下来
     * 如果能够通过 id 获取到数据就说明在之前的遍历中通过 pid 存储了一个节点数据
     * 但这个节点数据中只有子级数据，还不存在当前节点的数据，因为在当时还没有遍历到当前节点
     * 遍历到当前节点时，除了保存当前节点数据外，还要保留子级数据
     */
    itemMap[id] = {
      ...item,
      children: itemMap[id] ? itemMap[id].children : [],
    };

    const node = itemMap[id];

    if (pid === "0") {
      result.push(node);
    } else {
      /**
       * pid 的值就是某个节点的 id 值
       * 如果根据 pid 获取不到数据，就说明还没有遍历到那个节点
       * 但当前遍历的节点是那个节点的子级，需要以 pid 为键创建一个“空对象”
       * 先把子级数据保存下来，当未来遍历到那个节点的时候，再把那个节点的数据保存一下
       * 分两步处理，第一步保存子级，第二步保存父级节点数据
       */
      if (!itemMap[pid]) {
        itemMap[pid] = {
          children: [],
        };
      }

      itemMap[pid].children.push(node);
    }
  }

  return result;
}
