require_relative "my_solution"

describe Rectangle do
  let(:rectangle) { Rectangle.new(10, 20) }
  let(:square) { Rectangle.new(20, 20) }

  describe '#area' do
    it "is defined" do
      expect(Rectangle.method_defined?(:area)).to be_truthy
    end

    it "returns the correct area of a rectangle" do
      expect(rectangle.area).to eq 200
    end

    it "returns the correct area of a square" do
      expect(square.area).to eq 400
    end
  end

  describe '#perimeter' do
    it "is defined" do
      expect(Rectangle.method_defined?(:perimeter)).to be_truthy
    end

    it "returns the correct perimeter of a rectangle" do
      expect(rectangle.perimeter).to eq 60
    end

    it "returns the correct perimeter of a square" do
      expect(square.perimeter).to eq 80
    end
  end

  describe '#diagonal' do
    it "is defined" do
      expect(Rectangle.method_defined?(:diagonal)).to be_truthy
    end

    it "returns the correct diagonal of a rectangle" do
      expect(rectangle.diagonal).to eq 22.360679774997898
    end

    it "returns the correct diagonal of a square" do
      expect(square.diagonal).to eq 28.284271247461902
    end
  end

  describe '#square?' do
    it "is defined" do
      expect(Rectangle.method_defined?(:square?)).to be_truthy
    end

    it "returns false for a rectangle" do
      expect(rectangle.square?).to be_falsey
    end

    it "returns true for a square" do
      expect(square.square?).to be_truthy
    end
  end
end
