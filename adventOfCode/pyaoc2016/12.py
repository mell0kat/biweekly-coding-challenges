import sys
sys.path.append('/Users/katmello/Code/Challenges/adventOfCode')

from myutils import read_file

class Assembunny:
    def __init__(self):
        self.registers = {
            "a": 0,
            "b": 0,
            "c": 1,
            "d": 0,
        }
        self.current_idx = 0
        self.instructions = {
            "cpy": self.cpy,
            "inc": self.inc,
            "dec": self.dec,
            "jnz": self.jnz,
        }
    def get_val(self, x):
        try:
            val_x = int(x)
        except ValueError:
            val_x = self.registers[x]
        return val_x

    def inc(self, register):
        r = register[0]
        self.registers[r] = self.registers[r] + 1

    def dec(self, register):
        r = register[0]
        self.registers[r] = self.registers[r] - 1

    def cpy(self, args):
        x, register = args
        val_x =  self.get_val(x)
        self.registers[register] = val_x

    def jnz(self, args):
        x, y = args
        val_x = self.get_val(x)
        if val_x != 0:
            self.current_idx = self.current_idx + int(y) - 1

    def parse_instruction(self, instruction):
        command, *args = instruction.split(' ')
        self.instructions[command](args)

    def parse_code(self):
        l = read_file('12', 2016)
        i = 0
        while (self.current_idx < len(l)):
          self.parse_instruction(l[self.current_idx])
          self.current_idx = self.current_idx + 1
          i+=1

def __main():
   a = Assembunny()
   a.parse_code()
   print('REGISTERS', a.registers)


if __name__ == '__main__':
    __main()
