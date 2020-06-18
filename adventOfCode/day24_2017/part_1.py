import re


def is_match(c, num_ports):
    [l, r] = c.split('/')
    return True if l == num_ports or r == num_ports else False

def find_matching_components(num_ports, components):
    return list(filter(lambda c: is_match(c, num_ports), components))


def find_sum_of_connectors(num_ports, m, components):
    new_components = components.copy()
    new_components.remove(m)
    new_num_ports = m.split('/')
    new_num_ports.remove(num_ports)
    new_num_ports = new_num_ports[0]
    new_matches = find_matching_components(new_num_ports, new_components)
    if new_matches == []:
        print('adding', component_sum(m), m)
        return component_sum(m)
    else:
        summ = component_sum(m) + max(list(map(lambda i: find_sum_of_connectors(new_num_ports, i, new_components), new_matches)))
        return summ
    # recurse




connectors = ['0/2',
              '2/2',
              '2/3',
              '3/4',
              '3/5',
              '0/1',
              '10/1',
              '9/10'];


# Find one that matches with 0:
# for each of them, find what matches with them

def component_sum(c):
    return sum(map(lambda i: int(i), c.split('/')))


def calculate(components):
    num_ports = '0'
    matches = find_matching_components(num_ports, components)

    # for each of the matches, find matching components

    for m in matches:
        sum = find_sum_of_connectors(num_ports, m, components)
        print('SUM', m, sum)

if __name__ == '__main__':
    calculate(connectors)
