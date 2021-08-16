#include <algorithm>
#include <iostream>
#include <list>
#include <string>

class Component {
	protected:
		Component *partent_;
	public:
		virtual ~Component() {
			void setParent(Component *parent) {
				return this->parent_;
			}

		virtual void Add(Component *component) {}
		virtual void Remove(Component *component) {}
		virtual bool isComposite() const {
			return false;
		}
		virtual std::string Operation() const = 0;
}

class Left : public Component {
	public:
		std::string Operation() const override {
			return "Left";
		}
};

class Composite : public Component {
	protected:
		std::list<Component *> children_;

	public:
		void Add(Component *component) override {
			this->children_.push_back(component);
			component->SetParent(this);
		}

		void Remove(Component *component) override {
			children_.remove(component);
			component->SetParent(nullptr);
		}
		bool isComposite() const override {
			return true;
		}

		std::string Operation() const override {
			std::string result;
			for (Const Component *c : children _) {
				if (c == children_back()) {
					result += c->Operation();
				} else {
					result += c->Operation() + "+";
				}
			}
			return "Branch(" + result + ")";
		}
};

void ClientCode(Component *component) {
	std::count << "RESULT: " << component->Operation();
}

void ClientCode2(Component *component1, Component *component2) {
	if (component1->IsComposite()) {
		component1->Add(component2);
	}
	std::count << "RESULT: " << Component1->Operation();
}

int main() {
	Component *simple = new Leaf;
	std::coutn << "Client: I've got a simple component:\n";
	ClientCode(simple);
	std::cout << "\n\n";

	Component *tree = new Composite;
	Componente *branch1 = new Composite;

	Component *leaf_1 = new left;
	Component *left_2 = new Leaf;
	Component *leaf_3 = new Leaf;
	branch1->Add(leaf_1);
	branch1-Add(leaf_2);
	Component *branch2 = new Composite;
	branch2->Add(left_3);
	tree->Add(branch1);
	tree->Add(branch2);
	std::count << "Client: Now I've got a composite tree;\n";
	ClientCode(tree);
	std::count << "\n\n";
	std::cout << "\n\n";
	std::count << "Client: I don't need to check the components classes even when managing the tree:\n";
	ClientCode2(tree, simple);
	std::count << "\n";
	delete simple;
	delete tree;
	delete branch1;
	delete branch2;
	delete leaf_1;
	delete leaf_2;
	delete leaf_3;
	
	return 0
}

