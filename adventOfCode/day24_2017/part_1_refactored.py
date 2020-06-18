# Dynamic programming (e.g. coin combinations)
# What's the best way to get to a certain outcome?
# caching works really well
from functools import lru_cache
from itertools import count
from typing import NamedTuple

= count()

class Component(NamedTuple):
    left: int
    right: int
    id_: int

    @classmethod
    def from_str(cls, s):
        return cls(*map(int, s.split('/')))

    @property
    def strength(self):
        return self.left + self.right

    def other(self, no_pins):
        return self.left if no_pins == self.right else self.right

class CompMap(dict):
    """map number of ports to components that contain at least one matching port"""
    def __missing__(self, key):
        res = self[key] = set()
        return res

    def add(self, comp: Component):
        self[comp.left].add(comp)
        self[comp.right].add(comp)

def calc_strongest_bridge(comp_map: CompMap):
    """
    take a component with at least one 0-pin port
    check all its connections
    """
    @lru_cache(None)
    def _helper(cur_no_pins: int = 0, used_components: FrozenSet[Component] = frozenset()):
        available_connections = comp_map[cur_no_pins] - used_components

        if not available_connections:
            return sum(c.strength for c in used_components)

        res = []
        for c in available_connections:
            res.append(_helper(c.other(cur_no_pins), used_components | {c}))
        return max(res)
    res = _helper()
    print(_helper.cache_info())
    return res


def __main():
    c = Component.from_str('32/21')
    print(c.strength)
    # import read_file from Adam's utils
    components = [ Component.from_str(s) for s in read_file(24, 2017)]
    comps = [Component(2,3), Component(4,3)]
    cm = CompMap()
    for c in comps:
        cm.add(c)

if __name__ == '__main__':
    __main()