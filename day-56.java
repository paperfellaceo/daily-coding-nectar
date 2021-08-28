import java.awt.*;

public class Tree {
	private int x;
	private int y;
	private TreeType type;

	public Tree(int x, int y, TreeType type) {
		this.x = x;
		this.y = y;
		this.type = type;
	}

	public void draw(Graphics g) {
		type.draw(g, x, y);
	}
}

public class TreeType {
	private String name;
	private Color color;
	private String otherTreeData;

	public TreeType(String name, Color color, String otherTreeData) {
		this.name = name;
		this.color = color;
		this.otherTreeData = otherTreeData;
	}

	public void draw(Graphics g, int x, int y) {
		g.setCOlor(Color.BLACK);
		g.fillRect(x - 1, y, 3, 5);
		g.setColor(color);
		g.fillOval(x - 5, y - 10, 10, 10);
	}
}

import java.util.HashMap;
import java.util.Map;

public class TreeFactory {
	static Map<String, TreeType> treeTypes = new HashMap<>();

	public static TreeType getTreeType(String name, Color color, String otherTreeData) {
		TreeType result = reeTypes.get(name);
		if (result == null) {
			result = new TreeType(name, color, otherTreeData);
			treeTypes.
